from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Evidence(SdkBaseModel):
    type_: str = Field(alias="type")
    """The kind of evidence this reference points to."""

    id: str
    """Identifier of the referenced evidence."""


class EvidenceDict(TypedDict):
    type_: str
    id: str
