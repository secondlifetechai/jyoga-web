import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { commentType } from "./commentType";
import { aboutType } from "./aboutType";
import { homeSettingsType } from "./homeSettingsType";
import { serviceType } from "./serviceType";
import { yogaType } from "./yogaType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, commentType, aboutType, homeSettingsType, serviceType, yogaType],
};
