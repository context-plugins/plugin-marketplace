from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventFilter(SdkBaseModel):
    """Filters events based on exact matches on the CloudEvents attributes."""

    attribute: Optional[str] = UNSET
    """Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for
    filtering. You can `retrieve a specific provider's supported event types
    </eventarc/docs/list-providers#describe-provider>`__. All triggers MUST provide a filter for the 'type'
    attribute."""

    operator: Optional[str] = UNSET
    """Optional. The operator used for matching the events with the value of the filter. If not specified, only events
    that have an exact key-value pair specified in the filter are matched. The allowed values are ``path_pattern`` and
    ``match-path-pattern``. ``path_pattern`` is only allowed for GCFv1 triggers."""

    value: Optional[str] = UNSET
    """Required. The value for the attribute."""


class EventFilterDict(TypedDict):
    attribute: NotRequired[str]
    operator: NotRequired[str]
    value: NotRequired[str]
