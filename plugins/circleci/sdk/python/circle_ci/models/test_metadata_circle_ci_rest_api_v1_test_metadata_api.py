from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.result import ResultOrStr


class TestMetadataCircleCiRestApiV1TestMetadataApi(SdkBaseModel):
    message: Optional[str] = UNSET
    """The test message"""

    file: Optional[str] = UNSET
    """The file containing the test"""

    source: Optional[str] = UNSET
    """The source of the test"""

    run_time: Optional[float] = UNSET
    """The run time of the test in seconds"""

    result: Optional[ResultOrStr] = UNSET
    """The test result"""

    name: Optional[str] = UNSET
    """The name of the test"""

    classname: Optional[str] = UNSET
    """The class name of the test"""


class TestMetadataCircleCiRestApiV1TestMetadataApiDict(TypedDict):
    message: NotRequired[str]
    file: NotRequired[str]
    source: NotRequired[str]
    run_time: NotRequired[float]
    result: NotRequired[ResultOrStr]
    name: NotRequired[str]
    classname: NotRequired[str]
