from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate, param
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.businesscentral.dynamics.com/v2.0/{environment}/api/v2.0"
    environment: str = "production"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    environment: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://{server}:{port}/{instance}/api/v2.0"
    server: str = "localhost"
    port: str = "7048"
    instance: str = "BC"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    server: NotRequired[str]
    port: NotRequired[str]
    instance: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("environment", production.environment)]
            )
        environment2 = self.environment2
        return UrlTemplate(
            base_url=environment2.base_url,
            path=path,
            variables=[
                param[str]("server", environment2.server),
                param[str]("port", environment2.port),
                param[str]("instance", environment2.instance),
            ],
        )


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]


class AuthServerProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.microsoftonline.com/{tenantId}/oauth2/v2.0"


class AuthServerProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.microsoftonline.com/{tenantId}/oauth2/v2.0"


class AuthServerEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: AuthServerProductionConfig = Field(default_factory=AuthServerProductionConfig)
    environment2: AuthServerEnvironment2Config = Field(default_factory=AuthServerEnvironment2Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class AuthServerConfigDict(TypedDict):
    production: NotRequired[AuthServerProductionConfigDict]
    environment2: NotRequired[AuthServerEnvironment2ConfigDict]


class DefaultBusinessCentralAdministrationCenterAppManagementApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.businesscentral.dynamics.com/admin/v2.28"


class DefaultBusinessCentralAdministrationCenterAppManagementApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultBusinessCentralAdministrationCenterAppManagementApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.businesscentral.dynamics.com/admin/v2.28"


class DefaultBusinessCentralAdministrationCenterAppManagementApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultBusinessCentralAdministrationCenterAppManagementApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultBusinessCentralAdministrationCenterAppManagementApiProductionConfig = Field(
        default_factory=DefaultBusinessCentralAdministrationCenterAppManagementApiProductionConfig
    )
    environment2: DefaultBusinessCentralAdministrationCenterAppManagementApiEnvironment2Config = Field(
        default_factory=DefaultBusinessCentralAdministrationCenterAppManagementApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class DefaultBusinessCentralAdministrationCenterAppManagementApiConfigDict(TypedDict):
    production: NotRequired[DefaultBusinessCentralAdministrationCenterAppManagementApiProductionConfigDict]
    environment2: NotRequired[DefaultBusinessCentralAdministrationCenterAppManagementApiEnvironment2ConfigDict]


class DefaultBusinessCentralAutomationApiV20CompaniesApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.businesscentral.dynamics.com/v2.0/{environment}/api/microsoft/automation/v2.0"
    environment: str = "production"


class DefaultBusinessCentralAutomationApiV20CompaniesApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    environment: NotRequired[str]


class DefaultBusinessCentralAutomationApiV20CompaniesApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://{server}:{port}/{instance}/api/microsoft/automation/v2.0"
    server: str = "localhost"
    port: str = "7048"
    instance: str = "BC"


class DefaultBusinessCentralAutomationApiV20CompaniesApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    server: NotRequired[str]
    port: NotRequired[str]
    instance: NotRequired[str]


class DefaultBusinessCentralAutomationApiV20CompaniesApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultBusinessCentralAutomationApiV20CompaniesApiProductionConfig = Field(
        default_factory=DefaultBusinessCentralAutomationApiV20CompaniesApiProductionConfig
    )
    environment2: DefaultBusinessCentralAutomationApiV20CompaniesApiEnvironment2Config = Field(
        default_factory=DefaultBusinessCentralAutomationApiV20CompaniesApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("environment", production.environment)]
            )
        environment2 = self.environment2
        return UrlTemplate(
            base_url=environment2.base_url,
            path=path,
            variables=[
                param[str]("server", environment2.server),
                param[str]("port", environment2.port),
                param[str]("instance", environment2.instance),
            ],
        )


class DefaultBusinessCentralAutomationApiV20CompaniesApiConfigDict(TypedDict):
    production: NotRequired[DefaultBusinessCentralAutomationApiV20CompaniesApiProductionConfigDict]
    environment2: NotRequired[DefaultBusinessCentralAutomationApiV20CompaniesApiEnvironment2ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    auth_server: AuthServerConfig = Field(default_factory=AuthServerConfig)
    default_business_central_administration_center_app_management_api: (
        DefaultBusinessCentralAdministrationCenterAppManagementApiConfig
    ) = Field(default_factory=DefaultBusinessCentralAdministrationCenterAppManagementApiConfig)
    default_business_central_automation_api_v2_0_companies_api: (
        DefaultBusinessCentralAutomationApiV20CompaniesApiConfig
    ) = Field(default_factory=DefaultBusinessCentralAutomationApiV20CompaniesApiConfig)

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    auth_server: NotRequired[AuthServerConfigDict]
    default_business_central_administration_center_app_management_api: NotRequired[
        DefaultBusinessCentralAdministrationCenterAppManagementApiConfigDict
    ]
    default_business_central_automation_api_v2_0_companies_api: NotRequired[
        DefaultBusinessCentralAutomationApiV20CompaniesApiConfigDict
    ]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
