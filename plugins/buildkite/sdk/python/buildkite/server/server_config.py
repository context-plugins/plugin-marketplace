from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.buildkite.com/v2"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.buildkite.com/v2"


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


class DefaultBuildkiteAgentMetricsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://agent.buildkite.com/v3"


class DefaultBuildkiteAgentMetricsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultBuildkiteAgentMetricsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://agent-edge.buildkite.com/v3"


class DefaultBuildkiteAgentMetricsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultBuildkiteAgentMetricsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultBuildkiteAgentMetricsApiProductionConfig = Field(
        default_factory=DefaultBuildkiteAgentMetricsApiProductionConfig
    )
    environment2: DefaultBuildkiteAgentMetricsApiEnvironment2Config = Field(
        default_factory=DefaultBuildkiteAgentMetricsApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)


class DefaultBuildkiteAgentMetricsApiConfigDict(TypedDict):
    production: NotRequired[DefaultBuildkiteAgentMetricsApiProductionConfigDict]
    environment2: NotRequired[DefaultBuildkiteAgentMetricsApiEnvironment2ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_buildkite_agent_metrics_api: DefaultBuildkiteAgentMetricsApiConfig = Field(
        default_factory=DefaultBuildkiteAgentMetricsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_buildkite_agent_metrics_api: NotRequired[DefaultBuildkiteAgentMetricsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
