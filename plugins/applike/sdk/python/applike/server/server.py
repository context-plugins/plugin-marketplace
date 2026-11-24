from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(path)

    def default_management_app_partner_connection_api(self, path: str) -> UrlTemplate:
        return self.config.default_management_app_partner_connection_api.resolve(path)
