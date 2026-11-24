from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error1 import Error1OrStr


class GoogleCloudApihubV1DependencyErrorDetail(SdkBaseModel):
    """Details describing error condition of a dependency."""

    error: Optional[Error1OrStr] = UNSET
    """Optional. Error in the dependency."""

    error_time: Optional[str] = Field(default=UNSET, alias="errorTime")
    """Optional. Timestamp at which the error was found."""


class GoogleCloudApihubV1DependencyErrorDetailDict(TypedDict):
    error: NotRequired[Error1OrStr]
    error_time: NotRequired[str]
