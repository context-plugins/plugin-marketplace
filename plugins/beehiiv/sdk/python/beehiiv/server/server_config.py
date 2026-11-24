from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.beehiiv.com/v2"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultOAuth2AuthorizationsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://app.beehiiv.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultOAuth2AuthorizationsApiConfigDict(TypedDict):
    base_url: NotRequired[str]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_o_auth2_authorizations_api: DefaultOAuth2AuthorizationsApiConfig = Field(
        default_factory=DefaultOAuth2AuthorizationsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_o_auth2_authorizations_api: NotRequired[DefaultOAuth2AuthorizationsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
