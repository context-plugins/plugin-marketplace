from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .submitted_compose_service import SubmittedComposeService, SubmittedComposeServiceDict


class SubmittedComposeDocument(SdkBaseModel):
    """Normalized Compose document transported with a hosted runtime artifact."""

    services: dict[str, SubmittedComposeService]


class SubmittedComposeDocumentDict(TypedDict):
    services: dict[str, SubmittedComposeServiceDict]
