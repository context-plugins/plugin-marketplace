from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(path)

    def default_o_auth2_authorizations_api(self, path: str) -> UrlTemplate:
        return self.config.default_o_auth2_authorizations_api.resolve(path)
