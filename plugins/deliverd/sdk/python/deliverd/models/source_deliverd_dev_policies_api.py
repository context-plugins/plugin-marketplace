from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceDeliverdDevPoliciesApi(SdkBaseModel):
    """The repository these rules are kept in. Marks the version as managed in Git"""

    repository: str
    """owner/name, or the repository's URL"""

    commit: Optional[str] = UNSET
    """The commit the file was read at"""

    path: Optional[str] = UNSET
    """The policy file's path in the repository"""


class SourceDeliverdDevPoliciesApiDict(TypedDict):
    repository: str
    commit: NotRequired[str]
    path: NotRequired[str]
