from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status import StatusOrStr


class DeepcrawlStatusResponse(SdkBaseModel):
    task_id: str = Field(alias="taskId")
    status: Optional[StatusOrStr] = UNSET
    success: Optional[bool] = UNSET
    message: Optional[str] = UNSET
    error: OptionalNullable[str] = UNSET
    r2_key: Optional[str] = Field(default=UNSET, alias="r2Key")
    zip_url: OptionalNullable[str] = Field(default=UNSET, alias="zipUrl")


class DeepcrawlStatusResponseDict(TypedDict):
    task_id: str
    status: NotRequired[StatusOrStr]
    success: NotRequired[bool]
    message: NotRequired[str]
    error: NotRequired[str | None]
    r2_key: NotRequired[str]
    zip_url: NotRequired[str | None]
