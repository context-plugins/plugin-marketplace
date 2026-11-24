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

    def default_circle_ci_rest_api_v2_context_api(self, path: str) -> UrlTemplate:
        return self.config.default_circle_ci_rest_api_v2_context_api.resolve(self.environment, path)
