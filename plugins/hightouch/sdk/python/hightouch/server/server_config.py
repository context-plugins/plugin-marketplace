from __future__ import annotations

from pydantic import BaseModel, ConfigDict

from ..core import UrlTemplate


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.hightouch.com/api/v1"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)
