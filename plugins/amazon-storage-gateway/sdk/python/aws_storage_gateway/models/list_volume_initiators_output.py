from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListVolumeInitiatorsOutput(SdkBaseModel):
    initiators: Optional[list[str]] = Field(default=UNSET, alias="Initiators")
    """The host names and port numbers of all iSCSI initiators that are connected to the gateway."""


class ListVolumeInitiatorsOutputDict(TypedDict):
    initiators: NotRequired[list[str]]
