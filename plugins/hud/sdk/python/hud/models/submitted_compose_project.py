from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_compose_document import SubmittedComposeDocument, SubmittedComposeDocumentDict
from .submitted_compose_project_ref import SubmittedComposeProjectRef, SubmittedComposeProjectRefDict


class SubmittedComposeProject(SdkBaseModel):
    """Compose document and its optional environment source artifact."""

    model_config = ConfigDict(extra="forbid")

    document: SubmittedComposeDocument
    """Normalized Compose document transported with a hosted runtime artifact."""

    root: Optional[SubmittedComposeProjectRef] = UNSET
    service_access: Optional[bool] = UNSET


class SubmittedComposeProjectDict(TypedDict):
    document: SubmittedComposeDocumentDict
    root: NotRequired[SubmittedComposeProjectRefDict]
    service_access: NotRequired[bool]
