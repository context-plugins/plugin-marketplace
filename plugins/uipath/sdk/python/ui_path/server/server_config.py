from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate, param
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)
    environment3: DefaultEnvironment3Config = Field(default_factory=DefaultEnvironment3Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", production.organization_name),
                    param[str]("tenantName", production.tenant_name),
                ],
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", environment2.organization_name),
                    param[str]("tenantName", environment2.tenant_name),
                ],
            )
        environment3 = self.environment3
        return UrlTemplate(
            base_url=environment3.base_url,
            path=path,
            variables=[
                param[str]("organizationName", environment3.organization_name),
                param[str]("tenantName", environment3.tenant_name),
            ],
        )


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]
    environment3: NotRequired[DefaultEnvironment3ConfigDict]


class DefaultUiPathAutomationHubAppInventoryApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{orgName}/{tenantName}/automationhub_/api/v1"
    org_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathAutomationHubAppInventoryApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    org_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathAutomationHubAppInventoryApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathAutomationHubAppInventoryApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathAutomationHubAppInventoryApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com"


class DefaultUiPathAutomationHubAppInventoryApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultUiPathAutomationHubAppInventoryApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultUiPathAutomationHubAppInventoryApiProductionConfig = Field(
        default_factory=DefaultUiPathAutomationHubAppInventoryApiProductionConfig
    )
    environment2: DefaultUiPathAutomationHubAppInventoryApiEnvironment2Config = Field(
        default_factory=DefaultUiPathAutomationHubAppInventoryApiEnvironment2Config
    )
    environment3: DefaultUiPathAutomationHubAppInventoryApiEnvironment3Config = Field(
        default_factory=DefaultUiPathAutomationHubAppInventoryApiEnvironment3Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url,
                path=path,
                variables=[
                    param[str]("orgName", production.org_name), param[str]("tenantName", production.tenant_name)
                ],
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", environment2.organization_name),
                    param[str]("tenantName", environment2.tenant_name),
                ],
            )
        environment3 = self.environment3
        return UrlTemplate(base_url=environment3.base_url, path=path)


class DefaultUiPathAutomationHubAppInventoryApiConfigDict(TypedDict):
    production: NotRequired[DefaultUiPathAutomationHubAppInventoryApiProductionConfigDict]
    environment2: NotRequired[DefaultUiPathAutomationHubAppInventoryApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultUiPathAutomationHubAppInventoryApiEnvironment3ConfigDict]


class DefaultUiPathPlatformManagementAuditLogsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com"


class DefaultUiPathPlatformManagementAuditLogsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultUiPathPlatformManagementAuditLogsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com"


class DefaultUiPathPlatformManagementAuditLogsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultUiPathPlatformManagementAuditLogsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com"


class DefaultUiPathPlatformManagementAuditLogsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultUiPathPlatformManagementAuditLogsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultUiPathPlatformManagementAuditLogsApiProductionConfig = Field(
        default_factory=DefaultUiPathPlatformManagementAuditLogsApiProductionConfig
    )
    environment2: DefaultUiPathPlatformManagementAuditLogsApiEnvironment2Config = Field(
        default_factory=DefaultUiPathPlatformManagementAuditLogsApiEnvironment2Config
    )
    environment3: DefaultUiPathPlatformManagementAuditLogsApiEnvironment3Config = Field(
        default_factory=DefaultUiPathPlatformManagementAuditLogsApiEnvironment3Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        environment3 = self.environment3
        return UrlTemplate(base_url=environment3.base_url, path=path)


class DefaultUiPathPlatformManagementAuditLogsApiConfigDict(TypedDict):
    production: NotRequired[DefaultUiPathPlatformManagementAuditLogsApiProductionConfigDict]
    environment2: NotRequired[DefaultUiPathPlatformManagementAuditLogsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultUiPathPlatformManagementAuditLogsApiEnvironment3ConfigDict]


class DefaultUiPathDocumentUnderstandingClassificationApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDocumentUnderstandingClassificationApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDocumentUnderstandingClassificationApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDocumentUnderstandingClassificationApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDocumentUnderstandingClassificationApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDocumentUnderstandingClassificationApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDocumentUnderstandingClassificationApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultUiPathDocumentUnderstandingClassificationApiProductionConfig = Field(
        default_factory=DefaultUiPathDocumentUnderstandingClassificationApiProductionConfig
    )
    environment2: DefaultUiPathDocumentUnderstandingClassificationApiEnvironment2Config = Field(
        default_factory=DefaultUiPathDocumentUnderstandingClassificationApiEnvironment2Config
    )
    environment3: DefaultUiPathDocumentUnderstandingClassificationApiEnvironment3Config = Field(
        default_factory=DefaultUiPathDocumentUnderstandingClassificationApiEnvironment3Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", production.organization_name),
                    param[str]("tenantName", production.tenant_name),
                ],
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", environment2.organization_name),
                    param[str]("tenantName", environment2.tenant_name),
                ],
            )
        environment3 = self.environment3
        return UrlTemplate(
            base_url=environment3.base_url,
            path=path,
            variables=[
                param[str]("organizationName", environment3.organization_name),
                param[str]("tenantName", environment3.tenant_name),
            ],
        )


class DefaultUiPathDocumentUnderstandingClassificationApiConfigDict(TypedDict):
    production: NotRequired[DefaultUiPathDocumentUnderstandingClassificationApiProductionConfigDict]
    environment2: NotRequired[DefaultUiPathDocumentUnderstandingClassificationApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultUiPathDocumentUnderstandingClassificationApiEnvironment3ConfigDict]


class DefaultUiPathDataServiceEntitiesApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDataServiceEntitiesApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDataServiceEntitiesApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDataServiceEntitiesApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDataServiceEntitiesApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathDataServiceEntitiesApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathDataServiceEntitiesApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultUiPathDataServiceEntitiesApiProductionConfig = Field(
        default_factory=DefaultUiPathDataServiceEntitiesApiProductionConfig
    )
    environment2: DefaultUiPathDataServiceEntitiesApiEnvironment2Config = Field(
        default_factory=DefaultUiPathDataServiceEntitiesApiEnvironment2Config
    )
    environment3: DefaultUiPathDataServiceEntitiesApiEnvironment3Config = Field(
        default_factory=DefaultUiPathDataServiceEntitiesApiEnvironment3Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", production.organization_name),
                    param[str]("tenantName", production.tenant_name),
                ],
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", environment2.organization_name),
                    param[str]("tenantName", environment2.tenant_name),
                ],
            )
        environment3 = self.environment3
        return UrlTemplate(
            base_url=environment3.base_url,
            path=path,
            variables=[
                param[str]("organizationName", environment3.organization_name),
                param[str]("tenantName", environment3.tenant_name),
            ],
        )


class DefaultUiPathDataServiceEntitiesApiConfigDict(TypedDict):
    production: NotRequired[DefaultUiPathDataServiceEntitiesApiProductionConfigDict]
    environment2: NotRequired[DefaultUiPathDataServiceEntitiesApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultUiPathDataServiceEntitiesApiEnvironment3ConfigDict]


class DefaultUiPathTestManagerProjectsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathTestManagerProjectsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathTestManagerProjectsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathTestManagerProjectsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathTestManagerProjectsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"
    organization_name: str = "your-org"
    tenant_name: str = "your-tenant"


class DefaultUiPathTestManagerProjectsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    organization_name: NotRequired[str]
    tenant_name: NotRequired[str]


class DefaultUiPathTestManagerProjectsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultUiPathTestManagerProjectsApiProductionConfig = Field(
        default_factory=DefaultUiPathTestManagerProjectsApiProductionConfig
    )
    environment2: DefaultUiPathTestManagerProjectsApiEnvironment2Config = Field(
        default_factory=DefaultUiPathTestManagerProjectsApiEnvironment2Config
    )
    environment3: DefaultUiPathTestManagerProjectsApiEnvironment3Config = Field(
        default_factory=DefaultUiPathTestManagerProjectsApiEnvironment3Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", production.organization_name),
                    param[str]("tenantName", production.tenant_name),
                ],
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url,
                path=path,
                variables=[
                    param[str]("organizationName", environment2.organization_name),
                    param[str]("tenantName", environment2.tenant_name),
                ],
            )
        environment3 = self.environment3
        return UrlTemplate(
            base_url=environment3.base_url,
            path=path,
            variables=[
                param[str]("organizationName", environment3.organization_name),
                param[str]("tenantName", environment3.tenant_name),
            ],
        )


class DefaultUiPathTestManagerProjectsApiConfigDict(TypedDict):
    production: NotRequired[DefaultUiPathTestManagerProjectsApiProductionConfigDict]
    environment2: NotRequired[DefaultUiPathTestManagerProjectsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultUiPathTestManagerProjectsApiEnvironment3ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_ui_path_automation_hub_app_inventory_api: DefaultUiPathAutomationHubAppInventoryApiConfig = Field(
        default_factory=DefaultUiPathAutomationHubAppInventoryApiConfig
    )
    default_ui_path_platform_management_audit_logs_api: DefaultUiPathPlatformManagementAuditLogsApiConfig = Field(
        default_factory=DefaultUiPathPlatformManagementAuditLogsApiConfig
    )
    default_ui_path_document_understanding_classification_api: (
        DefaultUiPathDocumentUnderstandingClassificationApiConfig
    ) = Field(default_factory=DefaultUiPathDocumentUnderstandingClassificationApiConfig)
    default_ui_path_data_service_entities_api: DefaultUiPathDataServiceEntitiesApiConfig = Field(
        default_factory=DefaultUiPathDataServiceEntitiesApiConfig
    )
    default_ui_path_test_manager_projects_api: DefaultUiPathTestManagerProjectsApiConfig = Field(
        default_factory=DefaultUiPathTestManagerProjectsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_ui_path_automation_hub_app_inventory_api: NotRequired[DefaultUiPathAutomationHubAppInventoryApiConfigDict]
    default_ui_path_platform_management_audit_logs_api: NotRequired[
        DefaultUiPathPlatformManagementAuditLogsApiConfigDict
    ]
    default_ui_path_document_understanding_classification_api: NotRequired[
        DefaultUiPathDocumentUnderstandingClassificationApiConfigDict
    ]
    default_ui_path_data_service_entities_api: NotRequired[DefaultUiPathDataServiceEntitiesApiConfigDict]
    default_ui_path_test_manager_projects_api: NotRequired[DefaultUiPathTestManagerProjectsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
