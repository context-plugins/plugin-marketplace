from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Domain(str, Enum):
    """The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value
    specified for the Domain parameter of the CreateDataset operation must match. The Domain and DatasetType that you
    choose determine the fields that must be present in training data that you import to a dataset. For example, if you
    choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id,
    timestamp, and demand fields are present in your data. For more information, see Dataset groups."""

    RETAIL = "RETAIL"
    CUSTOM = "CUSTOM"
    INVENTORY_PLANNING = "INVENTORY_PLANNING"
    EC2_CAPACITY = "EC2_CAPACITY"
    WORK_FORCE = "WORK_FORCE"
    WEB_TRAFFIC = "WEB_TRAFFIC"
    METRICS = "METRICS"

    __str__ = str.__str__


DomainOrStr: TypeAlias = Annotated[Domain | str, open_enum_validator(Domain)]
