from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .identifier import Identifier, IdentifierDict


class IdrQueueForReprocessingInput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    identifiers: list[Identifier]
    """e.g. [{ identifier: "email", value: "a@b.com" }] Identifier values will be queued for reprocessing. Clusters
    containing these identifiers will be reprocessed on the next run."""

    block: bool = True
    """If true, identifier values will also be added to the blocklist and ignored in future runs."""


class IdrQueueForReprocessingInputDict(TypedDict):
    identifiers: list[IdentifierDict]
    block: NotRequired[bool]
