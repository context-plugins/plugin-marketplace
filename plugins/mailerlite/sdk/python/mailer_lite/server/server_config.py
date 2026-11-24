from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field

from ..core import UrlTemplate
from .environment import Environment


class ProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "http://api.mailerlite.com/api/v2"


class Environment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.mailerlite.com/api/v2"


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: ProductionConfig = Field(default_factory=ProductionConfig)
    environment2: Environment2Config = Field(default_factory=Environment2Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        variant = self.production if environment == "production" else self.environment2
        return UrlTemplate(base_url=variant.base_url, path=path)
