from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExportOptions(SdkBaseModel):
    """Options for issue export."""

    type_: str = Field(alias="type")
    project_key: Optional[str] = UNSET
    project_name: Optional[str] = UNSET
    send_email: Optional[bool] = UNSET
    include_attachments: Optional[bool] = UNSET


class ExportOptionsDict(TypedDict):
    type_: str
    project_key: NotRequired[str]
    project_name: NotRequired[str]
    send_email: NotRequired[bool]
    include_attachments: NotRequired[bool]
