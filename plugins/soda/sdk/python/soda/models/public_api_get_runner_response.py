from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_runner_dto import PublicApiRunnerDto, PublicApiRunnerDtoDict


class PublicApiGetRunnerResponse(SdkBaseModel):
    runner: Optional[PublicApiRunnerDto] = UNSET


class PublicApiGetRunnerResponseDict(TypedDict):
    runner: NotRequired[PublicApiRunnerDtoDict]
