using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record EnrichConnectTransactionsApi
{
    [JsonPropertyName("location")]
    public required LocationReportingReportsApi? Location { get; init; }

    [JsonPropertyName("cleanDescription")]
    public required string CleanDescription { get; init; }

    /// <summary>
    /// This field contains an array of strings, each representing a specific tag for the transaction. The format of each string should be <c>tag_name:tag_value</c>, where <c>tag_name</c> defines the type of transaction (e.g., <c>card</c>, <c>income</c>, <c>mortgage</c>), and <c>tag_value</c> provides additional details (e.g., "card:4615"). The tags help classify and identify transactions based on various criteria.
    /// <list type="bullet">
    ///   <item><description>card:4615</description></item>
    ///   <item><description>conduct:card</description></item>
    ///   <item><description>conduct:overdrawn</description></item>
    ///   <item><description>conduct:cheque</description></item>
    ///   <item><description>conduct:atm</description></item>
    ///   <item><description>conduct:currency</description></item>
    ///   <item><description>conduct:late</description></item>
    ///   <item><description>conduct:admin</description></item>
    ///   <item><description>conduct:dishonour</description></item>
    ///   <item><description>conduct:interest</description></item>
    ///   <item><description>governmentPayment:centrelink</description></item>
    ///   <item><description>governmentPayment:centrelinkCarers</description></item>
    ///   <item><description>governmentPayment:crisisSupport</description></item>
    ///   <item><description>governmentPayment:education</description></item>
    ///   <item><description>governmentPayment:familyAllowance</description></item>
    ///   <item><description>governmentPayment:jobseekerPymt</description></item>
    ///   <item><description>governmentPayment:medicare</description></item>
    ///   <item><description>governmentPayment:newstart</description></item>
    ///   <item><description>governmentPayment:pension</description></item>
    ///   <item><description>governmentPayment:rentalAssistance</description></item>
    ///   <item><description>governmentPayment:vetAffairs</description></item>
    ///   <item><description>governmentPayment:youthAllowance</description></item>
    ///   <item><description>income:childSupport</description></item>
    ///   <item><description>income:insurance</description></item>
    ///   <item><description>income:investment</description></item>
    ///   <item><description>income:rent</description></item>
    ///   <item><description>income:salary</description></item>
    ///   <item><description>income:superannuation</description></item>
    ///   <item><description>liability:afterpay</description></item>
    ///   <item><description>liability:arl collect pty ltd</description></item>
    ///   <item><description>liability:australian recoveries</description></item>
    ///   <item><description>liability:axess</description></item>
    ///   <item><description>liability:azora</description></item>
    ///   <item><description>liability:baycorp</description></item>
    ///   <item><description>liability:beforepay</description></item>
    ///   <item><description>liability:brighte</description></item>
    ///   <item><description>liability:bundll</description></item>
    ///   <item><description>liability:cash converters</description></item>
    ///   <item><description>liability:cash direct</description></item>
    ///   <item><description>liability:cashngo</description></item>
    ///   <item><description>liability:cash stop</description></item>
    ///   <item><description>liability:cash train</description></item>
    ///   <item><description>liability:ccc</description></item>
    ///   <item><description>liability:cfmg pty ltd</description></item>
    ///   <item><description>liability:charter mercantile</description></item>
    ///   <item><description>liability:cigno</description></item>
    ///   <item><description>liability:collectau</description></item>
    ///   <item><description>liability:collection house</description></item>
    ///   <item><description>liability:complete credit solutions</description></item>
    ///   <item><description>liability:credit collection services</description></item>
    ///   <item><description>liability:credit corp</description></item>
    ///   <item><description>liability:creditline</description></item>
    ///   <item><description>liability:deferit</description></item>
    ///   <item><description>liability:dun and bradstreet</description></item>
    ///   <item><description>liability:earnd</description></item>
    ///   <item><description>liability:edstart</description></item>
    ///   <item><description>liability:finance one</description></item>
    ///   <item><description>liability:fundo</description></item>
    ///   <item><description>liability:fupay</description></item>
    ///   <item><description>liability:gem visa</description></item>
    ///   <item><description>liability:humm</description></item>
    ///   <item><description>liability:indebted</description></item>
    ///   <item><description>liability:klarna</description></item>
    ///   <item><description>liability:latitude</description></item>
    ///   <item><description>liability:laybuy</description></item>
    ///   <item><description>liability:limepay</description></item>
    ///   <item><description>liability:lion finance</description></item>
    ///   <item><description>liability:money3</description></item>
    ///   <item><description>liability:moneyloop</description></item>
    ///   <item><description>liability:mypaynow</description></item>
    ///   <item><description>liability:nimble</description></item>
    ///   <item><description>liability:nine25</description></item>
    ///   <item><description>liability:openpay</description></item>
    ///   <item><description>liability:panthera</description></item>
    ///   <item><description>liability:payitlater</description></item>
    ///   <item><description>liability:payright</description></item>
    ///   <item><description>liability:pioneer credit</description></item>
    ///   <item><description>liability:plenti</description></item>
    ///   <item><description>liability:probe</description></item>
    ///   <item><description>liability:q card</description></item>
    ///   <item><description>liability:quickapay</description></item>
    ///   <item><description>liability:spotmenow</description></item>
    ///   <item><description>liability:sunshine loans</description></item>
    ///   <item><description>liability:tapmypay</description></item>
    ///   <item><description>liability:wagetap</description></item>
    ///   <item><description>liability:wallet wizard</description></item>
    ///   <item><description>liability:zip pay</description></item>
    ///   <item><description>third-party:apple pay</description></item>
    ///   <item><description>third-party:google</description></item>
    ///   <item><description>third-party:paypal</description></item>
    ///   <item><description>third-party:sp</description></item>
    ///   <item><description>third-party:sq</description></item>
    ///   <item><description>creditCard:creditCard</description></item>
    ///   <item><description>expense:rent</description></item>
    ///   <item><description>loan:loan repayment</description></item>
    ///   <item><description>mortgage:afg home loans</description></item>
    ///   <item><description>mortgage:aims</description></item>
    ///   <item><description>mortgage:amo group</description></item>
    ///   <item><description>mortgage:athena</description></item>
    ///   <item><description>mortgage:aussie</description></item>
    ///   <item><description>mortgage:bluestone</description></item>
    ///   <item><description>mortgage:clickloans</description></item>
    ///   <item><description>mortgage:emoney</description></item>
    ///   <item><description>mortgage:express reverse mortgage</description></item>
    ///   <item><description>mortgage:firstmac</description></item>
    ///   <item><description>mortgage:fox symes</description></item>
    ///   <item><description>mortgage:freedom lend</description></item>
    ///   <item><description>mortgage:freedom loans</description></item>
    ///   <item><description>mortgage:funding</description></item>
    ///   <item><description>mortgage:heartland reverse mortgages</description></item>
    ///   <item><description>mortgage:homeloans</description></item>
    ///   <item><description>mortgage:homestar</description></item>
    ///   <item><description>mortgage:homestart</description></item>
    ///   <item><description>mortgage:household capital</description></item>
    ///   <item><description>mortgage:illawarra home loans</description></item>
    ///   <item><description>mortgage:keystart</description></item>
    ///   <item><description>mortgage:la trobe financial</description></item>
    ///   <item><description>mortgage:liberty financial</description></item>
    ///   <item><description>mortgage:loans</description></item>
    ///   <item><description>mortgage:mortgage house</description></item>
    ///   <item><description>mortgage:mortgage offset</description></item>
    ///   <item><description>mortgage:mortgageport</description></item>
    ///   <item><description>mortgage:mortgage repayment</description></item>
    ///   <item><description>mortgage:onetwo</description></item>
    ///   <item><description>mortgage:online home loans</description></item>
    ///   <item><description>mortgage:pacific mortgage group</description></item>
    ///   <item><description>mortgage:pepper money</description></item>
    ///   <item><description>mortgage:qantas money</description></item>
    ///   <item><description>mortgage:reduce home loans</description></item>
    ///   <item><description>mortgage:resi</description></item>
    ///   <item><description>mortgage:resimac</description></item>
    ///   <item><description>mortgage:sucasa</description></item>
    ///   <item><description>mortgage:switzer home loans</description></item>
    ///   <item><description>mortgage:ticToc</description></item>
    ///   <item><description>mortgage:unloan</description></item>
    ///   <item><description>mortgage:vmg</description></item>
    ///   <item><description>mortgage:well money</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<string> Tags { get; init; }

    [JsonPropertyName("merchant")]
    public required MerchantReportingReportsApi? Merchant { get; init; }

    [JsonPropertyName("category")]
    public required CategoryConnectTransactionsApi? Category { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
