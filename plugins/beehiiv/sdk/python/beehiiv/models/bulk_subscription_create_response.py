from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BulkSubscriptionCreateResponse(SdkBaseModel):
    """The response containing the import ID"""

    message: str
    """The result of the create request"""

    import_id: str
    """The database ID of the import object created from the Bulk Subscription Create request"""


class BulkSubscriptionCreateResponseDict(TypedDict):
    message: str
    import_id: str
