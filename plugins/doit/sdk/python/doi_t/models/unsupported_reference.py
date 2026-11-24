from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind_doi_t_cloud_flow_api import KindDoiTCloudFlowApiOrStr


class UnsupportedReference(SdkBaseModel):
    node_key: str = Field(alias="nodeKey")
    kind: KindDoiTCloudFlowApiOrStr
    detail: Optional[str] = UNSET


class UnsupportedReferenceDict(TypedDict):
    node_key: str
    kind: KindDoiTCloudFlowApiOrStr
    detail: NotRequired[str]
