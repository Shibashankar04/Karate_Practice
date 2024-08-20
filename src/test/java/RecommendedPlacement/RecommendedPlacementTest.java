package RecommendedPlacement;

import org.junit.jupiter.api.Test;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
// import com.intuit.karate.junit5.Karate.Test;

public class RecommendedPlacementTest {

    @Test
    public void testrunner() {
        Results results = Runner.path("classpath:RecommendedPlacement").tags("@login").parallel(1);        
        
        
    }

    
}
