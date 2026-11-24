from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.classification import ClassificationOrStr


class EnvironmentModel(SdkBaseModel):
    """A Boomi runtime environment where Atoms are assigned and processes are deployed."""

    id: Optional[str] = UNSET
    """Unique identifier of the environment."""

    name: Optional[str] = UNSET
    """Display name of the environment."""

    classification: Optional[ClassificationOrStr] = UNSET
    """Environment classification."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """Timestamp when the environment was created."""


class EnvironmentModelDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    classification: NotRequired[ClassificationOrStr]
    created_date: NotRequired[RFC3339DateTime]
