from __future__ import annotations

from pydantic import BaseModel, ConfigDict

from ..core import UrlTemplate, param


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://{defaultHost}"
    default_host: str = "www.example.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path, variables=[param[str]("defaultHost", self.default_host)])
