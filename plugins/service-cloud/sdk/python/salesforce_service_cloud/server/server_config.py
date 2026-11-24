from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-na-west.prod.chatbots.sfdc.sh"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-na-east.prod.chatbots.sfdc.sh"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-eu-west.prod.chatbots.sfdc.sh"


class DefaultEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-eu-east.prod.chatbots.sfdc.sh"


class DefaultEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-ap-west.prod.chatbots.sfdc.sh"


class DefaultEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-api-ap-east.prod.chatbots.sfdc.sh"


class DefaultEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)
    environment3: DefaultEnvironment3Config = Field(default_factory=DefaultEnvironment3Config)
    environment4: DefaultEnvironment4Config = Field(default_factory=DefaultEnvironment4Config)
    environment5: DefaultEnvironment5Config = Field(default_factory=DefaultEnvironment5Config)
    environment6: DefaultEnvironment6Config = Field(default_factory=DefaultEnvironment6Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]
    environment3: NotRequired[DefaultEnvironment3ConfigDict]
    environment4: NotRequired[DefaultEnvironment4ConfigDict]
    environment5: NotRequired[DefaultEnvironment5ConfigDict]
    environment6: NotRequired[DefaultEnvironment6ConfigDict]


class AuthServerProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://login.salesforce.com/services/oauth2"


class AuthServerEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: AuthServerProductionConfig = Field(default_factory=AuthServerProductionConfig)
    environment2: AuthServerEnvironment2Config = Field(default_factory=AuthServerEnvironment2Config)
    environment3: AuthServerEnvironment3Config = Field(default_factory=AuthServerEnvironment3Config)
    environment4: AuthServerEnvironment4Config = Field(default_factory=AuthServerEnvironment4Config)
    environment5: AuthServerEnvironment5Config = Field(default_factory=AuthServerEnvironment5Config)
    environment6: AuthServerEnvironment6Config = Field(default_factory=AuthServerEnvironment6Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class AuthServerConfigDict(TypedDict):
    production: NotRequired[AuthServerProductionConfigDict]
    environment2: NotRequired[AuthServerEnvironment2ConfigDict]
    environment3: NotRequired[AuthServerEnvironment3ConfigDict]
    environment4: NotRequired[AuthServerEnvironment4ConfigDict]
    environment5: NotRequired[AuthServerEnvironment5ConfigDict]
    environment6: NotRequired[AuthServerEnvironment6ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    auth_server: AuthServerConfig = Field(default_factory=AuthServerConfig)

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    auth_server: NotRequired[AuthServerConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
