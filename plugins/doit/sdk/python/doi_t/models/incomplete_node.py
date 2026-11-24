from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_doi_t_cloud_flow_api import ReasonDoiTCloudFlowApiOrStr


class IncompleteNode(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    reason: Optional[ReasonDoiTCloudFlowApiOrStr] = UNSET


class IncompleteNodeDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    reason: NotRequired[ReasonDoiTCloudFlowApiOrStr]
