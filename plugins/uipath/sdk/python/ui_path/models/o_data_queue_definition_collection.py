from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .queue_definition import QueueDefinition, QueueDefinitionDict


class ODataQueueDefinitionCollection(SdkBaseModel):
    """OData collection response containing queue definitions"""

    value: Optional[list[QueueDefinition]] = UNSET


class ODataQueueDefinitionCollectionDict(TypedDict):
    value: NotRequired[list[QueueDefinitionDict]]
