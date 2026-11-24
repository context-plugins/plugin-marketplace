from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.app.mrscraper.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultScraperServiceGatewayAuthApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.mrscraper.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultScraperServiceGatewayAuthApiConfigDict(TypedDict):
    base_url: NotRequired[str]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_scraper_service_gateway_auth_api: DefaultScraperServiceGatewayAuthApiConfig = Field(
        default_factory=DefaultScraperServiceGatewayAuthApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_scraper_service_gateway_auth_api: NotRequired[DefaultScraperServiceGatewayAuthApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
