from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentFundingModel(str, Enum):
    """DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no
    longer supported. Instead, use the ``billingType`` field inside ``DeveloperMonetizationConfig`` resource. Flag that
    specifies the billing account type, prepaid or postpaid."""

    PAYMENT_FUNDING_MODEL_UNSPECIFIED = "PAYMENT_FUNDING_MODEL_UNSPECIFIED"
    PREPAID = "PREPAID"
    POSTPAID = "POSTPAID"

    __str__ = str.__str__


PaymentFundingModelOrStr: TypeAlias = Annotated[PaymentFundingModel | str, open_enum_validator(PaymentFundingModel)]
