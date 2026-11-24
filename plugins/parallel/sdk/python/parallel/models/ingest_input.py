from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IngestInput(SdkBaseModel):
    """Input model for FindAll ingest."""

    objective: str
    """Natural language objective to create a FindAll run spec."""


class IngestInputDict(TypedDict):
    objective: str
