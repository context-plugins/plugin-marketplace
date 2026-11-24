from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiVerifyContractRequestDto(SdkBaseModel):
    check_paths: Optional[list[str]] = Field(default=UNSET, alias="checkPaths")


class PublicApiVerifyContractRequestDtoDict(TypedDict):
    check_paths: NotRequired[list[str]]
