from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .environment import Environment
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    environment: Environment
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(self.environment, path)

    def default_read_me_api_keys_api(self, path: str) -> UrlTemplate:
        return self.config.default_read_me_api_keys_api.resolve(self.environment, path)
