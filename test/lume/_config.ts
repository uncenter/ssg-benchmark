import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";

const site = lume();

site.use(nunjucks());

export default site;
