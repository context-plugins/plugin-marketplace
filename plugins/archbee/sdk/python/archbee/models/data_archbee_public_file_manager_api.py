from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataArchbeePublicFileManagerApi(SdkBaseModel):
    src: Optional[str] = UNSET
    """AWS link to the uploaded file"""


class DataArchbeePublicFileManagerApiDict(TypedDict):
    src: NotRequired[str]
