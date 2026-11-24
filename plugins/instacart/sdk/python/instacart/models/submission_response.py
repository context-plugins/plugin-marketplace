from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_instacart_catalog_items_api import StatusInstacartCatalogItemsApiOrStr
from .error1 import Error1, Error1Dict


class SubmissionResponse(SdkBaseModel):
    submission_id: Optional[str] = UNSET
    """A unique identifier for tracking the submission."""

    status: Optional[StatusInstacartCatalogItemsApiOrStr] = UNSET
    """The current status of the submission."""

    submitted_count: Optional[int] = UNSET
    """The number of records submitted."""

    errors: Optional[list[Error1]] = UNSET
    """Any validation errors found in the submitted data."""


class SubmissionResponseDict(TypedDict):
    submission_id: NotRequired[str]
    status: NotRequired[StatusInstacartCatalogItemsApiOrStr]
    submitted_count: NotRequired[int]
    errors: NotRequired[list[Error1Dict]]
