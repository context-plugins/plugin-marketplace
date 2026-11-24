from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.agentpaid.io/api/v1"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.agentpaid.io/api/v2"


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


class DefaultReferenceAnalyticsExperimentalApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.agentpaid.io/api/v2"


class DefaultReferenceAnalyticsExperimentalApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultReferenceAnalyticsExperimentalApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.agentpaid.io/api/v2"


class DefaultReferenceAnalyticsExperimentalApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultReferenceAnalyticsExperimentalApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultReferenceAnalyticsExperimentalApiProductionConfig = Field(
        default_factory=DefaultReferenceAnalyticsExperimentalApiProductionConfig
    )
    environment2: DefaultReferenceAnalyticsExperimentalApiEnvironment2Config = Field(
        default_factory=DefaultReferenceAnalyticsExperimentalApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class DefaultReferenceAnalyticsExperimentalApiConfigDict(TypedDict):
    production: NotRequired[DefaultReferenceAnalyticsExperimentalApiProductionConfigDict]
    environment2: NotRequired[DefaultReferenceAnalyticsExperimentalApiEnvironment2ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_reference_analytics_experimental_api: DefaultReferenceAnalyticsExperimentalApiConfig = Field(
        default_factory=DefaultReferenceAnalyticsExperimentalApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_reference_analytics_experimental_api: NotRequired[DefaultReferenceAnalyticsExperimentalApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
