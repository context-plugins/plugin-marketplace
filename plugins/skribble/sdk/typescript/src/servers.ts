import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
  Environment4: "environment4",
  Environment5: "environment5",
  Environment6: "environment6",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultSkribbleAdditionalInformationApi: (subPath: string) => UrlTemplate;
  defaultSkribbleDocumentApi: (subPath: string) => UrlTemplate;
  defaultSkribbleIdentificationApi: (subPath: string) => UrlTemplate;
  defaultSkribbleMonitoringApi: (subPath: string) => UrlTemplate;
  defaultSkribbleReportApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSealApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSendToApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSignatureApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSignatureAttachmentApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSignatureHandlingApi: (subPath: string) => UrlTemplate;
  defaultSkribbleSignatureSignerApi: (subPath: string) => UrlTemplate;
  defaultSkribbleUserApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureSignerApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.de/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")),
  },
  defaultSkribbleSignatureSignerApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v3")) },
};

const environment3Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")),
  },
  defaultSkribbleSignatureSignerApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")),
  },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
};

const environment4Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.de/v1")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")),
  },
  defaultSkribbleSignatureSignerApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
};

const environment5Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v2")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureSignerApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
};

const environment6Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.de/v2")) },
  defaultSkribbleAdditionalInformationApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://document-validation.skribble.com/v1")),
  },
  defaultSkribbleDocumentApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleIdentificationApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleMonitoringApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleReportApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSealApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSendToApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
  defaultSkribbleSignatureAttachmentApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureHandlingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleSignatureSignerApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")),
  },
  defaultSkribbleUserApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.skribble.com/v3")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultSkribbleAdditionalInformationApi: resolveBaseUrl(
      defaultSkribbleAdditionalInformationApiServer(options),
    ),
    defaultSkribbleDocumentApi: resolveBaseUrl(defaultSkribbleDocumentApiServer(options)),
    defaultSkribbleIdentificationApi: resolveBaseUrl(defaultSkribbleIdentificationApiServer(options)),
    defaultSkribbleMonitoringApi: resolveBaseUrl(defaultSkribbleMonitoringApiServer(options)),
    defaultSkribbleReportApi: resolveBaseUrl(defaultSkribbleReportApiServer(options)),
    defaultSkribbleSealApi: resolveBaseUrl(defaultSkribbleSealApiServer(options)),
    defaultSkribbleSendToApi: resolveBaseUrl(defaultSkribbleSendToApiServer(options)),
    defaultSkribbleSignatureApi: resolveBaseUrl(defaultSkribbleSignatureApiServer(options)),
    defaultSkribbleSignatureAttachmentApi: resolveBaseUrl(
      defaultSkribbleSignatureAttachmentApiServer(options),
    ),
    defaultSkribbleSignatureHandlingApi: resolveBaseUrl(defaultSkribbleSignatureHandlingApiServer(options)),
    defaultSkribbleSignatureSignerApi: resolveBaseUrl(defaultSkribbleSignatureSignerApiServer(options)),
    defaultSkribbleUserApi: resolveBaseUrl(defaultSkribbleUserApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultSkribbleAdditionalInformationApi: (subPath) => ({
      baseUrl: base.defaultSkribbleAdditionalInformationApi,
      subPath,
    }),
    defaultSkribbleDocumentApi: (subPath) => ({ baseUrl: base.defaultSkribbleDocumentApi, subPath }),
    defaultSkribbleIdentificationApi: (subPath) => ({
      baseUrl: base.defaultSkribbleIdentificationApi,
      subPath,
    }),
    defaultSkribbleMonitoringApi: (subPath) => ({ baseUrl: base.defaultSkribbleMonitoringApi, subPath }),
    defaultSkribbleReportApi: (subPath) => ({ baseUrl: base.defaultSkribbleReportApi, subPath }),
    defaultSkribbleSealApi: (subPath) => ({ baseUrl: base.defaultSkribbleSealApi, subPath }),
    defaultSkribbleSendToApi: (subPath) => ({ baseUrl: base.defaultSkribbleSendToApi, subPath }),
    defaultSkribbleSignatureApi: (subPath) => ({ baseUrl: base.defaultSkribbleSignatureApi, subPath }),
    defaultSkribbleSignatureAttachmentApi: (subPath) => ({
      baseUrl: base.defaultSkribbleSignatureAttachmentApi,
      subPath,
    }),
    defaultSkribbleSignatureHandlingApi: (subPath) => ({
      baseUrl: base.defaultSkribbleSignatureHandlingApi,
      subPath,
    }),
    defaultSkribbleSignatureSignerApi: (subPath) => ({
      baseUrl: base.defaultSkribbleSignatureSignerApi,
      subPath,
    }),
    defaultSkribbleUserApi: (subPath) => ({ baseUrl: base.defaultSkribbleUserApi, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment2:
      return { baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment3:
      return { baseUrl: environment3Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment4:
      return { baseUrl: environment4Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment5:
      return { baseUrl: environment5Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment6:
      return { baseUrl: environment6Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleAdditionalInformationApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleAdditionalInformationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleAdditionalInformationApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleDocumentApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleDocumentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleDocumentApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleIdentificationApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleIdentificationApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleIdentificationApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleMonitoringApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleMonitoringApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleMonitoringApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleReportApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleReportApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleReportApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSealApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSealApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSealApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSendToApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSendToApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSendToApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSignatureApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSignatureApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSignatureAttachmentApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSignatureAttachmentApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureAttachmentApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSignatureHandlingApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSignatureHandlingApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureHandlingApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleSignatureSignerApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleSignatureSignerApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleSignatureSignerApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultSkribbleUserApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultSkribbleUserApi.baseUrl.decode(
          options.serverOptions?.defaultSkribbleUserApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
