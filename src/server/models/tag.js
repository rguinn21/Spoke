import thinky from "./thinky";
import { requiredString, timestamp, optionalTimestamp } from "./custom-types";

const type = thinky.type;

const Tag = thinky.createModel(
  "tag",
  type
    .object()
    .schema({
      id: type.string(),
      campaign_contact_id: requiredString(),
      tag: requiredString(),
      created_at: timestamp(),
      created_by: type.integer().required(),
      resolved_at: optionalTimestamp(),
      resolved_by: type.integer()
    })
    .allowExtra(true),
  { noAutoCreation: true }
);

export default Tag;
