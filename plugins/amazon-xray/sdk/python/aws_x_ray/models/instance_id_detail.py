from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InstanceIdDetail(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of a corresponding EC2 instance."""


class InstanceIdDetailDict(TypedDict):
    id: NotRequired[str]
