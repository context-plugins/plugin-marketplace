from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnomalyResource(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the Amazon Web Services resource."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of the Amazon Web Services resource."""


class AnomalyResourceDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
