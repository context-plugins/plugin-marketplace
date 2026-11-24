from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestCaseFilter(SdkBaseModel):
    status: Optional[str] = UNSET
    """The status used to filter test cases. A TestCaseFilter can have one status. Valid values are: SUCCEEDED FAILED
    ERROR SKIPPED UNKNOWN"""

    keyword: Optional[str] = UNSET
    """A keyword that is used to filter on the name or the prefix of the test cases. Only test cases where the keyword
    is a substring of the name or the prefix will be returned."""


class TestCaseFilterDict(TypedDict):
    status: NotRequired[str]
    keyword: NotRequired[str]
