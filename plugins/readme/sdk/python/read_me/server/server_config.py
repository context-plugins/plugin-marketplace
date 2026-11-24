from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://metrics.readme.io/v1"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://metrics.readme.io/v1"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]


class DefaultReadMeApiKeysApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.readme.com/v2"


class DefaultReadMeApiKeysApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultReadMeApiKeysApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://dash.readme.io/api/v1"


class DefaultReadMeApiKeysApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultReadMeApiKeysApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultReadMeApiKeysApiProductionConfig = Field(default_factory=DefaultReadMeApiKeysApiProductionConfig)
    environment2: DefaultReadMeApiKeysApiEnvironment2Config = Field(
        default_factory=DefaultReadMeApiKeysApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class DefaultReadMeApiKeysApiConfigDict(TypedDict):
    production: NotRequired[DefaultReadMeApiKeysApiProductionConfigDict]
    environment2: NotRequired[DefaultReadMeApiKeysApiEnvironment2ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_read_me_api_keys_api: DefaultReadMeApiKeysApiConfig = Field(default_factory=DefaultReadMeApiKeysApiConfig)

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_read_me_api_keys_api: NotRequired[DefaultReadMeApiKeysApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
