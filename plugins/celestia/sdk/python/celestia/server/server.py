from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(path)

    def default_celestia_website_contact_api(self, path: str) -> UrlTemplate:
        return self.config.default_celestia_website_contact_api.resolve(path)
