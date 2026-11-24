from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cloudbuild.googleapis.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultConfigDict(TypedDict):
    base_url: NotRequired[str]


class AuthServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://accounts.google.com/o/oauth2"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class AuthServerConfigDict(TypedDict):
    base_url: NotRequired[str]


class AccessTokenServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://oauth2.googleapis.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class AccessTokenServerConfigDict(TypedDict):
    base_url: NotRequired[str]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    auth_server: AuthServerConfig = Field(default_factory=AuthServerConfig)
    access_token_server: AccessTokenServerConfig = Field(default_factory=AccessTokenServerConfig)

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    auth_server: NotRequired[AuthServerConfigDict]
    access_token_server: NotRequired[AccessTokenServerConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
