from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(path)

    def default_airtable_scim_groups_api(self, path: str) -> UrlTemplate:
        return self.config.default_airtable_scim_groups_api.resolve(path)
