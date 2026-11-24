from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .update_target_dto import UpdateTargetDto, UpdateTargetDtoDict


class UpdateFeatureConfigDto(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    """Status of the Feature Configuration"""

    targets: Optional[list[UpdateTargetDto]] = UNSET
    """The targets to evaluate what variation a user should be delivered"""


class UpdateFeatureConfigDtoDict(TypedDict):
    status: NotRequired[StatusOrStr]
    targets: NotRequired[list[UpdateTargetDtoDict]]
