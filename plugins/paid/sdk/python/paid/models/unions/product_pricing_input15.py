from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..product_pricing_input import ProductPricingInput, ProductPricingInputDict
from ..product_pricing_input1 import ProductPricingInput1, ProductPricingInput1Dict
from ..product_pricing_input2 import ProductPricingInput2, ProductPricingInput2Dict
from ..product_pricing_input3 import ProductPricingInput3, ProductPricingInput3Dict
from ..product_pricing_input4 import ProductPricingInput4, ProductPricingInput4Dict
from ..product_pricing_input5 import ProductPricingInput5, ProductPricingInput5Dict
from ..product_pricing_input6 import ProductPricingInput6, ProductPricingInput6Dict
from ..product_pricing_input7 import ProductPricingInput7, ProductPricingInput7Dict
from ..product_pricing_input8 import ProductPricingInput8, ProductPricingInput8Dict
from ..product_pricing_input9 import ProductPricingInput9, ProductPricingInput9Dict
from ..product_pricing_input10 import ProductPricingInput10, ProductPricingInput10Dict
from ..product_pricing_input11 import ProductPricingInput11, ProductPricingInput11Dict
from ..product_pricing_input12 import ProductPricingInput12, ProductPricingInput12Dict
from ..product_pricing_input13 import ProductPricingInput13, ProductPricingInput13Dict
from ..product_pricing_input14 import ProductPricingInput14, ProductPricingInput14Dict

ProductPricingInput15: TypeAlias = Annotated[
    (
        Annotated[ProductPricingInput, Tag("RecurringPerUnit")]
        | Annotated[ProductPricingInput1, Tag("RecurringGraduated")]
        | Annotated[ProductPricingInput2, Tag("RecurringVolume")]
        | Annotated[ProductPricingInput3, Tag("RecurringPercentOfTotal")]
        | Annotated[ProductPricingInput4, Tag("UsagePerUnit")]
        | Annotated[ProductPricingInput5, Tag("UsageGraduated")]
        | Annotated[ProductPricingInput6, Tag("UsageVolume")]
        | Annotated[ProductPricingInput7, Tag("UsagePrepaidCredits")]
        | Annotated[ProductPricingInput8, Tag("UsageBracketedPrepaidCredits")]
        | Annotated[ProductPricingInput9, Tag("UsageCostPlus")]
        | Annotated[ProductPricingInput10, Tag("OneTimePerUnit")]
        | Annotated[ProductPricingInput11, Tag("SeatBasedPerUnit")]
        | Annotated[ProductPricingInput12, Tag("SeatBasedGraduated")]
        | Annotated[ProductPricingInput13, Tag("SeatBasedVolume")]
        | Annotated[ProductPricingInput14, Tag("SeatBasedPrepaidCredits")]
    ),
    WireDiscriminator("pricingType"),
]

ProductPricingInput15Dict: TypeAlias = (
    ProductPricingInputDict
    | ProductPricingInput1Dict
    | ProductPricingInput2Dict
    | ProductPricingInput3Dict
    | ProductPricingInput4Dict
    | ProductPricingInput5Dict
    | ProductPricingInput6Dict
    | ProductPricingInput7Dict
    | ProductPricingInput8Dict
    | ProductPricingInput9Dict
    | ProductPricingInput10Dict
    | ProductPricingInput11Dict
    | ProductPricingInput12Dict
    | ProductPricingInput13Dict
    | ProductPricingInput14Dict
)
