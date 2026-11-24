from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestMetadata(SdkBaseModel):
    message: Optional[str] = UNSET
    """The test message"""

    source: Optional[str] = UNSET
    """The source of the test"""

    run_time: Optional[str] = UNSET
    """The run time of the test"""

    file: Optional[str] = UNSET
    """The file containing the test"""

    result: Optional[str] = UNSET
    """The result of the test"""

    name: Optional[str] = UNSET
    """The name of the test"""

    classname: Optional[str] = UNSET
    """The class name of the test"""


class TestMetadataDict(TypedDict):
    message: NotRequired[str]
    source: NotRequired[str]
    run_time: NotRequired[str]
    file: NotRequired[str]
    result: NotRequired[str]
    name: NotRequired[str]
    classname: NotRequired[str]
