from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1TestDatastoreResponse(SdkBaseModel):
    """The response for TestDatastore"""

    state: Optional[str] = UNSET
    """Output only. It could be ``completed`` or ``failed``"""

    error: Optional[str] = UNSET
    """Output only. Error message of test connection failure"""


class GoogleCloudApigeeV1TestDatastoreResponseDict(TypedDict):
    state: NotRequired[str]
    error: NotRequired[str]
