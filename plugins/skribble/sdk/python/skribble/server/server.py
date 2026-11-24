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

    def default_skribble_additional_information_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_additional_information_api.resolve(self.environment, path)

    def default_skribble_document_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_document_api.resolve(self.environment, path)

    def default_skribble_identification_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_identification_api.resolve(self.environment, path)

    def default_skribble_monitoring_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_monitoring_api.resolve(self.environment, path)

    def default_skribble_report_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_report_api.resolve(self.environment, path)

    def default_skribble_seal_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_seal_api.resolve(self.environment, path)

    def default_skribble_send_to_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_send_to_api.resolve(self.environment, path)

    def default_skribble_signature_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_signature_api.resolve(self.environment, path)

    def default_skribble_signature_attachment_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_signature_attachment_api.resolve(self.environment, path)

    def default_skribble_signature_handling_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_signature_handling_api.resolve(self.environment, path)

    def default_skribble_signature_signer_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_signature_signer_api.resolve(self.environment, path)

    def default_skribble_user_api(self, path: str) -> UrlTemplate:
        return self.config.default_skribble_user_api.resolve(self.environment, path)
