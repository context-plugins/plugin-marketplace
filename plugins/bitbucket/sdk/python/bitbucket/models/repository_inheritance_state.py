from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RepositoryInheritanceState(SdkBaseModel):
    """A json object representing the repository's inheritance state values"""

    type_: str = Field(alias="type")
    override_settings: Optional[Any] = UNSET


class RepositoryInheritanceStateDict(TypedDict):
    type_: str
    override_settings: NotRequired[Any]
