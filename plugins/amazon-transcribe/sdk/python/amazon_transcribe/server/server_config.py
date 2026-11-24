from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate, param
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://transcribe.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://transcribe.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        environment2 = self.environment2
        return UrlTemplate(
            base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
        )


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]


class DefaultAmazonTranscribeServiceOperationsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://transcribestreaming.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonTranscribeServiceOperationsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonTranscribeServiceOperationsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://transcribe.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonTranscribeServiceOperationsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonTranscribeServiceOperationsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonTranscribeServiceOperationsApiProductionConfig = Field(
        default_factory=DefaultAmazonTranscribeServiceOperationsApiProductionConfig
    )
    environment2: DefaultAmazonTranscribeServiceOperationsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonTranscribeServiceOperationsApiEnvironment2Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        environment2 = self.environment2
        return UrlTemplate(
            base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
        )


class DefaultAmazonTranscribeServiceOperationsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonTranscribeServiceOperationsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonTranscribeServiceOperationsApiEnvironment2ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_amazon_transcribe_service_operations_api: DefaultAmazonTranscribeServiceOperationsApiConfig = Field(
        default_factory=DefaultAmazonTranscribeServiceOperationsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_amazon_transcribe_service_operations_api: NotRequired[DefaultAmazonTranscribeServiceOperationsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
