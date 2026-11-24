import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyHeadcountChangeSignalSchema,
  type CompanyHeadcountChangeSignal,
} from "./company-headcount-change-signal.js";
import { companyItSpendSignalSchema, type CompanyItSpendSignal } from "./company-it-spend-signal.js";
import {
  companyNewsSignalInternalSchema,
  companyNewsSignalSchema,
  type CompanyNewsSignal,
} from "./company-news-signal.js";
import {
  companySurgeInHiringByDepartmentSignalSchema,
  type CompanySurgeInHiringByDepartmentSignal,
} from "./company-surge-in-hiring-by-department-signal.js";
import {
  companySurgeInHiringByLocationSignalSchema,
  type CompanySurgeInHiringByLocationSignal,
} from "./company-surge-in-hiring-by-location-signal.js";
import {
  companySurgeInHiringSignalSchema,
  type CompanySurgeInHiringSignal,
} from "./company-surge-in-hiring-signal.js";
import {
  companyWebsiteTrafficSignalSchema,
  type CompanyWebsiteTrafficSignal,
} from "./company-website-traffic-signal.js";

export type CompanySignalData = {
  companyId?: string;
  companyName?: string;
  domain?: string;
  riskNews?: CompanyNewsSignal[];
  commercialActivityNews?: CompanyNewsSignal[];
  corporateStrategyNews?: CompanyNewsSignal[];
  financialEventsNews?: CompanyNewsSignal[];
  peopleNews?: CompanyNewsSignal[];
  marketIntelligenceNews?: CompanyNewsSignal[];
  productActivityNews?: CompanyNewsSignal[];
  surgeInHiring?: CompanySurgeInHiringSignal[];
  surgeInHiringByDepartment?: CompanySurgeInHiringByDepartmentSignal[];
  surgeInHiringByLocation?: CompanySurgeInHiringByLocationSignal[];
  websiteTrafficIncrease?: CompanyWebsiteTrafficSignal[];
  websiteTrafficDecrease?: CompanyWebsiteTrafficSignal[];
  itSpendIncrease?: CompanyItSpendSignal[];
  itSpendDecrease?: CompanyItSpendSignal[];
  headcountIncrease1M?: CompanyHeadcountChangeSignal[];
  headcountDecrease1M?: CompanyHeadcountChangeSignal[];
  headcountIncrease3M?: CompanyHeadcountChangeSignal[];
  headcountDecrease3M?: CompanyHeadcountChangeSignal[];
  headcountIncrease6M?: CompanyHeadcountChangeSignal[];
  headcountDecrease6M?: CompanyHeadcountChangeSignal[];
  headcountIncrease12M?: CompanyHeadcountChangeSignal[];
  headcountDecrease12M?: CompanyHeadcountChangeSignal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySignalDataProperties: s.Shape<CompanySignalData> = {
  companyId: s.optional(s.string()),
  companyName: s.optional(s.string()),
  domain: s.optional(s.string()),
  riskNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  commercialActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  corporateStrategyNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  financialEventsNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  peopleNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  marketIntelligenceNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  productActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalInternalSchema))),
  surgeInHiring: s.optional(s.array(s.lazy(() => companySurgeInHiringSignalSchema))),
  surgeInHiringByDepartment: s.optional(s.array(s.lazy(() => companySurgeInHiringByDepartmentSignalSchema))),
  surgeInHiringByLocation: s.optional(s.array(s.lazy(() => companySurgeInHiringByLocationSignalSchema))),
  websiteTrafficIncrease: s.optional(s.array(s.lazy(() => companyWebsiteTrafficSignalSchema))),
  websiteTrafficDecrease: s.optional(s.array(s.lazy(() => companyWebsiteTrafficSignalSchema))),
  itSpendIncrease: s.optional(s.array(s.lazy(() => companyItSpendSignalSchema))),
  itSpendDecrease: s.optional(s.array(s.lazy(() => companyItSpendSignalSchema))),
  headcountIncrease1M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease1M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease3M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease3M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease6M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease6M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountIncrease12M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  headcountDecrease12M: s.optional(s.array(s.lazy(() => companyHeadcountChangeSignalSchema))),
  _keysMap: {
    headcountIncrease1M: "headcountIncrease1m",
    headcountDecrease1M: "headcountDecrease1m",
    headcountIncrease3M: "headcountIncrease3m",
    headcountDecrease3M: "headcountDecrease3m",
    headcountIncrease6M: "headcountIncrease6m",
    headcountDecrease6M: "headcountDecrease6m",
    headcountIncrease12M: "headcountIncrease12m",
    headcountDecrease12M: "headcountDecrease12m",
  },
};

export const companySignalDataInternalSchema: Schema<CompanySignalData> = s.object<CompanySignalData>(
  companySignalDataProperties,
  { additionalProperties: s.json() },
);

export const companySignalDataSchema: Schema<CompanySignalData> = s.lazySchema(() =>
  s.object<CompanySignalData>(
    {
      ...companySignalDataProperties,
      riskNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      commercialActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      corporateStrategyNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      financialEventsNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      peopleNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      marketIntelligenceNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
      productActivityNews: s.optional(s.array(s.lazy(() => companyNewsSignalSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
